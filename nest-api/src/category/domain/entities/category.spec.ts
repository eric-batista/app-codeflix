import Category from './category'
import { omit } from 'lodash'

describe('Category Unit Tests', () => {
    test('Constructor of category', () => {
        let category = new Category({
            name: 'movie',
        })
        let props = omit(category.props, 'created_at')
        expect(props).toStrictEqual({
            name: 'movie',
            description: null,
            is_active: true,
        })

        category = new Category({
            name: 'movie A',
            description: 'some description A',
        })
        props = omit(category.props, 'created_at')
        expect(props).toStrictEqual({
            name: 'movie A',
            description: 'some description A',
            is_active: true,
        })

        category = new Category({
            name: 'movie B',
            is_active: false,
        })
        props = omit(category.props, 'created_at')
        expect(props).toStrictEqual({
            name: 'movie B',
            description: null,
            is_active: false,
        })
    })
})
