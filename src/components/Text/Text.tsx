import styled from "styled-components";
import { space, typography, TypographyProps, SpaceProps } from 'styled-system';

type TextProps = TypographyProps &SpaceProps
export const Text = styled.p<TextProps>`
font-family: 14px;
font-weight:bold;
color: #fff;
${typography}
${space}
`;

