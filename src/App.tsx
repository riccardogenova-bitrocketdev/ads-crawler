/** @format */

// #region ::: IMPORT
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinkit';
import {
  selectorTotalDownloaded,
  selectorTotaleItems,
  selectorPercentDownloaded,
  selectorLastUpdate,
  selectorIsPolling,
} from './redux-modules/selectors';
import { FormattedNumber, FormattedDate, FormattedTime } from 'react-intl';
import { Header } from './components/navigation/Header';
import { Button } from './components/ui/Button';
import { Loader } from './components/ui/Loader';
import { Text } from './components/ui/Text';
import { StatusBar } from './components/navigation/StatusBar';
import {
  actionStopPolling,
  actionStartPolling,
} from './redux-modules/actions/actionsPolling';
// #endregion

const styleText = {
  display: 'flex',
  padding: '0 .5rem',
  fontSize: '0.95rem',
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const totalDownloaded = useSelector(selectorTotalDownloaded);
  const totalItems = useSelector(selectorTotaleItems);
  const percentDownload = useSelector(selectorPercentDownloaded);
  const lastUpdate = useSelector(selectorLastUpdate);
  const isPolling = useSelector(selectorIsPolling);

  const handleButton = () =>
    isPolling ? dispatch(actionStopPolling()) : dispatch(actionStartPolling());

  return (
    <Header>
      <div>
        <Button onClick={handleButton}>{isPolling ? 'Stop' : 'Start'}</Button>
        {isPolling && (
          <Loader>
            <div>
              <Spinner name="pacman" />
              <div
                style={{
                  position: 'relative',
                  top: '3rem',
                }}
              >
                {percentDownload && <Text id={`${percentDownload}%`} tag="p" />}
              </div>
            </div>
          </Loader>
        )}
        {totalItems > 0 && (
          <StatusBar>
            <div style={styleText}>
              <FormattedNumber value={totalDownloaded}>
                {(number: string) => <Text id={number} tag="p" />}
              </FormattedNumber>
              /
              <FormattedNumber value={totalItems}>
                {(number: string) => <Text id={number} tag="p" />}
              </FormattedNumber>
            </div>
            <div style={styleText}>
              <FormattedDate
                value={lastUpdate}
                year="numeric"
                month="long"
                day="2-digit"
              >
                {(date: string) => (
                  <FormattedTime value={lastUpdate}>
                    {(time: string) => (
                      <Text
                        id={`Ultimo aggiornamento ${date} alle ore ${time}`}
                        tag="p"
                      />
                    )}
                  </FormattedTime>
                )}
              </FormattedDate>
            </div>
          </StatusBar>
        )}
      </div>
    </Header>
  );
};

export default App;
