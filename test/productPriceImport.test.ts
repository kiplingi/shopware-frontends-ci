test('Product price component import', async () => {
    const cmp = await import('../components/product/ProductPrice.vue')
    expect(cmp).toBeDefined()
})
