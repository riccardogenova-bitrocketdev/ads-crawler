/**
 * Text
 *
 * @format
 */

import React from 'react';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';

interface WrapperProps {
  intl: any;
  children?: any;
  intlFormatter?: any;
  intlFormatterValues?: any;
  itemProp?: any;
  id?: any;
  tag: 'h1' | 'h2' | 'span' | 'p';
}

const Wrapper = injectIntl(
  ({
    intl,
    intlFormatter,
    intlFormatterValues,
    itemProp,
    id,
    tag: Component,
  }: WrapperProps) => {
    let computedChildren = id;

    if (intlFormatter) {
      if (intlFormatterValues) {
        const intlFormatterValuesHasComponent = Object.keys(
          intlFormatterValues,
        ).some(valueKey => valueKey.toLowerCase().includes('component'));
        const useFormattedMessageComponent = intlFormatterValuesHasComponent;
        computedChildren = useFormattedMessageComponent ? (
          <FormattedMessage id={id} values={intlFormatterValues} />
        ) : (
          intl.formatMessage({ id }, intlFormatterValues)
        );
      } else {
        computedChildren = intl.formatMessage({ id });
      }
    }

    return <Component itemProp={itemProp}>{computedChildren}</Component>;
  },
);

interface Props {
  size?: string;
  color?: string;
  align?: string;
  transform?: string;
  id: string;
  tag: string;
}
export const Text = styled(Wrapper)<Props>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  ${({ align }) => align && align !== 'left' && `text-align: ${align};`};
  ${({ transform }) =>
    transform && transform !== 'none' && `text-transform: ${transform};`};
`;
