import Category from './category'

describe('Category Integration Tests', () => {
    test('Constructor of category', () => {
        const category = new Category({ name: 'Movie' })
        expect(category.name).toBe('Movie')
    })
})
