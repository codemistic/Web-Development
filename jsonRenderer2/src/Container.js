import Styled from "styled-components";

export const Container = Styled.div`
  position: ${(props) => props.position || "relative"};
  right: ${(props) => props.right || "node"};
  left: ${(props) => props.left || "none"};
  top: ${(props) => props.top || "none"};
  bottom: ${(props) => props.bottom || "none"};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "none"};
  max-width: ${(props) => props.maxWidth || "none"};
  height: ${(props) => props.height || "100%"};
  max-height: ${(props) => props.maxHeight || "none"};
  min-height: ${(props) => props.minHeight || "none"};
  backdrop-filter:: ${(props) => props.backdropFilter || "none"};
  // box-shadow: ${(props) => props.shadow || "none"};
  display: ${(props) => props.display || "flex"};
  white-space: ${(props) => props.space || "none"};
  flex-grow: ${(props) => props.grow || "none"};
  flex-wrap: ${(props) => props.wrap || "none"};
  flex: ${(props) => props.flex || ""};
  overflow: ${(props) => props.overflow || ""};
  text-overflow: ${(props) => props.textOverflow || ""};
  overflow-y: ${(props) => props.overflowY || "hidden"};
  overflow-x: ${(props) => props.overflowX || "hidden"};
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
  font-family: ${(props) => props.font || "Lato"};
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "none"};
  line-height: ${(props) => props.lineHeight || "none"};
  padding-top: ${(props) => props.paddingTop || "none"};
  padding: ${(props) => props.padding || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "none"};
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props.background || "transparent"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-right: ${(props) => props.borderRight || "none"};
  border-top: ${(props) => props.borderTop || "none"};
  border-radius: ${(props) => props.radius || "5px"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  opacity: ${(props) => props.opacity || 1};
  filter: ${(props) => props.filter || "none"};
  transition: ${(props) => props.transition || "none"};
  border: ${(props) => props.border || ""};
  border: ${(props) => (props.shadow ? "1px solid #9C9C9C !important" : "")};
  text-align: ${(props) => props.textAlign || "none"};
  box-sizing: ${(props) => props.sizing || "border-box"};
  cursor: ${(props) => props.cursor || ""};
  z-index: ${(props) => props.zIndex || ""};
  gap: ${(props) => props.gap || ""};
  class : ${(props) => props.className || ""};

  &:focus-within {
    ${(props) => props.on_focus};
  }
  @media (max-width: 1400px) {   
    ${(props) => props.xl || "none"};
  }

  @media (max-width: 1100px) {   
    ${(props) => props.lg || "none"};
  }

  @media (max-width: 800px) {   
    ${(props) => props.md || "none"};
  }

  @media (max-width: 500px) {   
    ${(props) => props.sm || "none"};
  }

  @media (max-width: 300px) {   
    ${(props) => props.xs || "none"};
  }
`;