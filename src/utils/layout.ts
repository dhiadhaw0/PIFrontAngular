type ToggleAttributeProps = (
  attribute: string,
  value: string,
  tag?: string,
  remove?: boolean
) => void

export const toggleDocumentAttribute: ToggleAttributeProps = (
  attribute,
  value,
  tag = 'html',
  remove
): void => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0]
    // const hasAttribute = element.getAttribute(attribute)
    // if (remove && hasAttribute) {
    //   element.removeAttribute(attribute)
    //   return
    // }
    element.setAttribute(attribute, value)
  }
}
