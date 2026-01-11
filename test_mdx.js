const { serialize } = require('next-mdx-remote/serialize')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

async function test() {
    const content = 'This is a test with { curly braces } in it.'
    console.log('Testing with curly braces...')
    try {
        await serialize(content, {
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
                format: 'mdx'
            }
        })
        console.log('Success with curly braces!')
    } catch (e) {
        console.log('Caught expected error:', e.message.split('\n')[0])
    }

    const content2 = 'This is math: $ \\{ x \\mid x > 0 \\} $'
    console.log('Testing with math and braces...')
    try {
        await serialize(content2, {
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
                format: 'mdx'
            }
        })
        console.log('Success with math!')
    } catch (e) {
        console.log('Error with math:', e.message.split('\n')[0])
    }
}

test()
