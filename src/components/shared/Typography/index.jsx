import mapKeys from 'lodash/mapKeys'

const TYPOGRAPHY_VARIANTS = mapKeys([
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'label',
    'caption',
    'option',
])

const AppTypography = props => {
    const { nodeType } = props
    const Component = TYPOGRAPHY_VARIANTS[nodeType] || 'div'

    const customClasses = `${props?.class ?? ''} ${props.variant}`.trim()

    return (
        <Component
            className={customClasses}
            dangerouslySetInnerHTML={{ __html: props.children }}
        />
    )
}

export default AppTypography
