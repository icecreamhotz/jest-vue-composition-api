// src/components/__tests__/HelloWorld.spec.ts
import { mount } from '@vue/test-utils';
import { Coin, Product } from '@/components/beverages';

describe('Coin.vue', () => {
  test('ถ้ากด Click ที่เหรียญจะ emit event value นั้นกลับไป', () => {
    const value = 5;
    const wrapper = mount(Coin, {
      propsData: {
        value,
      },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')).toEqual([[value]]);
  });
});

describe('Product.vue', () => {
  test('เช็ค Props required หมดทุกอันและ Type ถูกต้อง', () => {
    const wrapper = mount(Product, {
      propsData: {
        product: {},
        disabled: true,
      },
    });
    const props = wrapper.vm.$options.props as any;
    expect(props.product.required).toBe(true);
    expect(props.disabled.required).toBe(true);
    expect(props.product.type).toBe(Object);
    expect(props.disabled.type).toBe(Boolean);
  });
  test('ถ้าส่ง disable เป็น true ปุ่มต้องถูก disable', () => {
    const wrapper = mount(Product, {
      propsData: {
        product: {},
        disabled: true,
      },
    });
    expect(wrapper.find('button').attributes('disabled')).toBe('disabled');
  });
  test('ถ้ากด Click ซื้อสินค้าจะ emit event value นั้นกลับไป', () => {
    const product = {
      name: 'Test',
      image: 'https://www.gravatar.com/avatar/f5edc6f5b859586995e90c5ff79596d6?s=32&d=identicon&r=PG',
      price: 100,
    };
    const wrapper = mount(Product, {
      propsData: {
        product,
        disabled: false,
      },
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('buy')).toBeTruthy();
    expect(wrapper.emitted('buy')).toEqual([[product.price]]);
  });
});
