describe('Login Test', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have Login label', async () => {
    await waitFor(element(by.text('Login')))
      .toBeVisible()
      .withTimeout(5000)
  })
})
