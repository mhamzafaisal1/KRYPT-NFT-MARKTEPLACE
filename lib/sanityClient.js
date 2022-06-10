import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'at35czwe',
    dataset: 'production',
    apiVersion: '2022-07-06',
    token:
        'skbq0AnRxK1wEi0OzpMYQ92XfEGlOqMHjpDAHyURjGAGlAZzQXzMhZkorYuHQnxJOZtFFgz4MaNcGpNzvHL2MREvtVcXjQFhzTHsXyN9w6zd7syiCuXxlq38NhXRrVbMGn2qy4xbuyR2lCUfIIXJHOBfdxKx8RpKtWJ9eVrJ6AYDBv2oR2Br',
    useCdn: false,
})