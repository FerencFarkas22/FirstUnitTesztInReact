import {render, fireEvent} from "@testing-library/react"
import Counter from "./Counter";

describe(Counter, ()=> {
    it("counter displays correct initial count", ()=> {
        const {getByTestId} = render(<Counter initialCount={0}/>);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
})

describe(Counter, ()=> {
    it("count should increment by 1 if the increment button is clicked", ()=> {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>);
        const incrementBttn = getByRole("button", {name: "Increment"})
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBttn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    });
})

describe(Counter, ()=> {
    it("count should decrement by 1 if the decrement button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>);
        const decrementBttn = getByRole("button", {name: "Decrement"});
        const countvalue1 = Number(getByTestId("count").textContent);
        expect(countvalue1).toEqual(0);
        fireEvent.click(decrementBttn);
        const countvalue2 = Number(getByTestId("count").textContent);
        expect(countvalue2).toEqual(-1);
    })
})

describe(Counter, ()=> {
    it("count should be reset the initial value if the restart button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={50}/>);
        const RestartBttn = getByRole("button", {name: "Restart"});
       expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(RestartBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(0);

    })
})

describe(Counter, ()=> {
    it("count should invert signs if the switch signs button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={50}/>);
        const switchSign = getByRole("button", {name: "Switch Signs"});
       expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(switchSign);
        expect(Number(getByTestId("count").textContent)).toEqual(-50);
        fireEvent.click(switchSign);
        expect(Number(getByTestId("count").textContent)).toEqual(50);
    })
})