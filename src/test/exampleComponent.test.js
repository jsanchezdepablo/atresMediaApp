//Este test no es funcional, ya que la configuración inicial
//no he conseguido hacerla funcionar.

//Solo he testeado dos funciones a modo de ejemplo... Disculpad las molestias! :(

import React from "react";
import configureStore from "redux-mock-store";
import DogSelector from "../components/DogSelector";
import { shallow } from "enzyme";
import { initialState as dogInitialState } from "../reducers/dogReducer";

const initialState = {
  dogState: {
    dogInitialState
  }
};

describe("DogSelector Test Component", () => {
  const mockStore = configureStore();
  let wrapper, store;

  beforeAll(() => {
    store = mockStore(initialState);

    wrapper = shallow(<DogSelector store={store} />)
      .dive()
      .dive();
  });

  const initialRenderTest = () => {
    expect(wrapper).toMatchSnapshot();
  };

  const testHandleChange = () => {
    const component = wrapper.instance();

    expect(component.state.data.selectorValue).toBe("");

    component.handleChange({
      preventDefault: jest.fn(),
      target: { value: "value" }
    });
    expect(component.state.data.selectorValue).toBe("value");
    expect(component).toMatchSnapshot();
  };

  test("DogSelector should render", initialRenderTest);
  test("handleChange function test", testHandleChange);
});
