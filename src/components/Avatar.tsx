import styled from 'styled-components'

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 113px;
  width: 113px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #c3cbd5;

  > img {
    width: 100%;
    height: auto;
  }
`

export default Avatar
