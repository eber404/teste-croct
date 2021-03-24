import Slider from 'rc-slider/lib/Slider'
import styled from 'styled-components'

const SSlider = styled(Slider)`
  width: 276px !important;
  height: 2px !important;
  border-radius: 1px !important;
  -webkit-appearance: none !important;

  .rc-slider-handle {
    background-color: #3f80ff !important;
    height: 12px !important;
    width: 12px !important;
    border: none;
  }

  .rc-slider-rail {
    background-color: #b9d1ff !important;
    height: 2px;
  }

  .rc-slider-track {
    background-color: #3f80ff !important;
    height: 2px;
  }
`

export default SSlider
