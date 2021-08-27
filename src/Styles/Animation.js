import { css, keyframes } from "styled-components"

const fadeInkeyframes = keyframes`
from {
  filter : blur(10px);
  opacity: (0);
};

to{
  filter : blur(0);
  opacity: (1)
}
`

export const fadeIn = ({time='1s', type='ease' }={} ) =>
css`animation: ${time} ${fadeInkeyframes} ${type}; `
