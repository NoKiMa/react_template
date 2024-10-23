import { describe, it, expect } from 'vitest';
import { sum } from './simpleService'

describe('SimpleService', () => {
  it('sum', () => {
    const res = sum(3, 2)
    expect(res).toBe(5)
  })

})