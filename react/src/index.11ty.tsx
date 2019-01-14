import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Layout } from './components/Layout'
import { Disclosure } from './components/Disclosure'

// https://www.11ty.io/docs/data/#eleventy-provided-data-variables
type DefaultProvidedData = {
  pkg: unknown
  page: {
    url: string
  }
  collections: unknown
}

type PageData = {
  title: string
}

module.exports = class {
  data(): PageData {
    return {
      title: 'Home',
    }
  }

  render({ page, title }: DefaultProvidedData & PageData) {
    return (
      '<!doctype html>' +
      ReactDOMServer.renderToStaticMarkup(
        <Layout url={page.url} title={title}>
          <Disclosure
            rootClassName="u-mt5"
            summaryContent={
              <>
                最高の<em>コンテンツ</em>
              </>
            }
          >
            <p>立派なインターネットコンテンツになったなあ。</p>
          </Disclosure>
        </Layout>,
      )
    )
  }
}
