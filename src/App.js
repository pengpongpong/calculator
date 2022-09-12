import './index.css';
import React from "react"

const buttonHolder = [

  {
    class: "operator ac",
    onClick: "ac",
    id: "ac"
  },
  {
    class: "operator multi",
    onClick: "multiOps",
    id: "*"
  },
  {
    class: "number one",
    onClick: 1,
    id: "1"
  },
  {
    class: "number two",
    onClick: 2,
    id: "2"
  },
  {
    class: "number three",
    onClick: 3,
    id: "3"
  },
  {
    class: "operator div",
    onClick: "divOps",
    id: "/"
  },
  {
    class: "number four",
    onClick: 4,
    id: "4"
  },
  {
    class: "number five",
    onClick: 5,
    id: "5"
  },
  {
    class: "number six",
    onClick: 6,
    id: "6"
  },
  {
    class: "operator minus",
    onClick: "minusOps",
    id: "-"
  },
  {
    class: "number seven",
    onClick: 7,
    id: "7"
  },
  {
    class: "number eight",
    onClick: 8,
    id: "8"
  },
  {
    class: "number nine",
    onClick: 9,
    id: "9"
  },
  {
    class: "operator add",
    onClick: "plusOps",
    id: "+"
  },
  {
    class: "number zero",
    onClick: 0,
    id: "0"
  },
  {
    class: "number comma",
    onClick: ".",
    id: "."
  },
  {
    class: "operator equal",
    onClick: "equalOps",
    id: "="
  }
]

// find index of operations for calculationOps
function findIndex (arr) {
  const multiOpsIndex = arr.indexOf("multiOps");
  const divOpsIndex = arr.indexOf("divOps");
  const plusOpsIndex = arr.indexOf("plusOps");
  const minusOpsIndex = arr.indexOf("minusOps");
  return calculationOps(arr, multiOpsIndex, divOpsIndex, plusOpsIndex, minusOpsIndex)
}

// calculate whole array
function calculationOps (arr, multiOps, divOps, plusOps, minusOps) {

  // calculate operation
  function calcOp(operand1, operand2, ops) {
    if (ops === "plusOps") {
      let result = operand1 + operand2
      return result;
    }
    if (ops === "minusOps") {
      let result = operand1 - operand2
      return result;
    }
    if (ops === "multiOps") {  
      let result = operand1 * operand2
      return result;
    }
    if (ops === "divOps") {
      let result = operand1 / operand2
      return result;
    }
  }
 
  // indexes from function findIndex
  const multiOpsIndex = multiOps;
  const divOpsIndex = divOps;
  const plusOpsIndex = plusOps;
  const minusOpsIndex = minusOps;
  let tempRes = 0;
  let tempArr;

  // if single element in array, then return value
  if (arr.length < 3) {
    let result = arr[0].toFixed(5)
    return result
  }
  //first multiplication and division and then addition and substraction with left-to-right flow
  if (multiOpsIndex < divOpsIndex && multiOpsIndex !== -1 && divOpsIndex !== -1) {
    let firstOperand = arr[multiOpsIndex - 1];
      let secondOperand = arr[multiOpsIndex + 1];
      let ops = "multiOps";
      tempRes = calcOp(firstOperand, secondOperand, ops);
      // check if index is at the end of array
      if ((multiOpsIndex + 1) === (arr.length -1)) {
        tempArr = arr.slice(0, (multiOpsIndex - 1));
        tempArr.push(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the beginning of array
      if (multiOpsIndex === 1) {
        tempArr = arr.slice(multiOpsIndex + 2);
        tempArr.unshift(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the middle of array
      else if ((multiOpsIndex !== 1) && ((multiOpsIndex + 1) !== (arr.length -1))) {
        tempArr = arr.slice(0, (multiOpsIndex - 1));
        let tempArrEnd = arr.slice(multiOpsIndex + 2);
        tempArr.push(tempRes);
        tempArr.push(tempArrEnd);
        tempArr = tempArr.flat();
        return findIndex(tempArr);
      }
  }
  else if (divOpsIndex < multiOpsIndex && multiOpsIndex !== -1 && divOpsIndex !== -1) {
    let firstOperand = arr[divOpsIndex - 1];
      let secondOperand = arr[divOpsIndex + 1];
      let ops = "divOps";
      tempRes = calcOp(firstOperand, secondOperand, ops);
      // check if index is at the end of array
      if ((divOpsIndex + 1) === (arr.length -1)) {
        tempArr = arr.slice(0, (divOpsIndex - 1));
        tempArr.push(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the beginning of array
      if (divOpsIndex === 1) {
        tempArr = arr.slice(divOpsIndex + 2);
        tempArr.unshift(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the middle of array
      else if ((divOpsIndex !== 1) && ((divOpsIndex + 1) !== (arr.length -1))) {
        tempArr = arr.slice(0, (divOpsIndex - 1));
        let tempArrEnd = arr.slice(divOpsIndex + 2);
        tempArr.push(tempRes);
        tempArr.push(tempArrEnd);
        tempArr = tempArr.flat();
        return findIndex(tempArr);
      }
  }
  else if (multiOpsIndex > 0 && divOpsIndex === -1) {
    let firstOperand = arr[multiOpsIndex - 1];
      let secondOperand = arr[multiOpsIndex + 1];
      let ops = "multiOps";
      tempRes = calcOp(firstOperand, secondOperand, ops);
      // check if index is at the end of array
      if ((multiOpsIndex + 1) === (arr.length -1)) {
        tempArr = arr.slice(0, (multiOpsIndex - 1));
        tempArr.push(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the beginning of array
      if (multiOpsIndex === 1) {
        tempArr = arr.slice(multiOpsIndex + 2);
        tempArr.unshift(tempRes);
        return findIndex(tempArr);
      }
      // check if index is at the middle of array
      else if ((multiOpsIndex !== 1) && ((multiOpsIndex + 1) !== (arr.length -1))) {
        tempArr = arr.slice(0, (multiOpsIndex - 1));
        let tempArrEnd = arr.slice(multiOpsIndex + 2);
        tempArr.push(tempRes);
        tempArr.push(tempArrEnd);
        tempArr = tempArr.flat();
        return findIndex(tempArr);
      }
  }
  else if (divOpsIndex > 0 && multiOpsIndex === -1) {
    let firstOperand = arr[divOpsIndex - 1];
    let secondOperand = arr[divOpsIndex + 1];
    let ops = "divOps";
    tempRes = calcOp(firstOperand, secondOperand, ops);
    // check if index is at the end of array
    if ((divOpsIndex + 1) === (arr.length -1)) {
      tempArr = arr.slice(0, (divOpsIndex - 1));
      tempArr.push(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the beginning of array
    if (divOpsIndex === 1) {
      tempArr = arr.slice(divOpsIndex + 2);
      tempArr.unshift(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the middle of array
    else if ((divOpsIndex !== 1) && ((divOpsIndex + 1) !== (arr.length -1))) {
      tempArr = arr.slice(0, (divOpsIndex - 1));
      let tempArrEnd = arr.slice(divOpsIndex + 2);
      tempArr.push(tempRes);
      tempArr.push(tempArrEnd);
      tempArr = tempArr.flat();
      return findIndex(tempArr);
    }
  }
  else if (plusOpsIndex < minusOpsIndex && plusOpsIndex !== -1 && minusOpsIndex !== -1) {
    let firstOperand = arr[plusOpsIndex - 1];
    let secondOperand = arr[plusOpsIndex + 1];
    let ops = "plusOps";
    tempRes = calcOp(firstOperand, secondOperand, ops);
    // check if index is at the end of array
    if ((plusOpsIndex + 1) === (arr.length -1)) {
      tempArr = arr.slice(0, (plusOpsIndex - 1));
      tempArr.push(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the beginning of array
    if (plusOpsIndex === 1) {
      tempArr = arr.slice(plusOpsIndex + 2);
      tempArr.unshift(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the middle of array
    else if ((plusOpsIndex !== 1) && ((plusOpsIndex + 1) !== (arr.length -1))) {
      tempArr = arr.slice(0, (plusOpsIndex - 1));
      let tempArrEnd = arr.slice(plusOpsIndex + 2);
      tempArr.push(tempRes);
      tempArr.push(tempArrEnd);
      tempArr = tempArr.flat();
      return findIndex(tempArr);
    }
  }
  else if (minusOpsIndex < plusOpsIndex && plusOpsIndex !== -1 && minusOpsIndex !== -1) {
    let firstOperand = arr[minusOpsIndex - 1];
    let secondOperand = arr[minusOpsIndex + 1];
    let ops = "minusOps";
    tempRes = calcOp(firstOperand, secondOperand, ops);
    // check if index is at the end of array
    if ((minusOpsIndex + 1) === (arr.length -1)) {
      tempArr = arr.slice(0, (minusOpsIndex - 1));
      tempArr.push(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the beginning of array
    if (minusOpsIndex === 1) {
      tempArr = arr.slice(minusOpsIndex + 2);
      tempArr.unshift(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the middle of array
    else if ((minusOpsIndex !== 1) && ((minusOpsIndex + 1) !== (arr.length -1))) {
      tempArr = arr.slice(0, (minusOpsIndex - 1));
      let tempArrEnd = arr.slice(minusOpsIndex + 2);
      tempArr.push(tempRes);
      tempArr.push(tempArrEnd);
      tempArr = tempArr.flat();
      return findIndex(tempArr);
    }
  }
  else if (plusOpsIndex > 0 && minusOpsIndex === -1) {
    let firstOperand = arr[plusOpsIndex - 1];
    let secondOperand = arr[plusOpsIndex + 1];
    let ops = "plusOps";
    tempRes = calcOp(firstOperand, secondOperand, ops);
    // check if index is at the end of array
    if ((plusOpsIndex + 1) === (arr.length -1)) {
      tempArr = arr.slice(0, (plusOpsIndex - 1));
      tempArr.push(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the beginning of array
    if (plusOpsIndex === 1) {
      tempArr = arr.slice(plusOpsIndex + 2);
      tempArr.unshift(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the middle of array
    else if ((plusOpsIndex !== 1) && ((plusOpsIndex + 1) !== (arr.length -1))) {
      tempArr = arr.slice(0, (plusOpsIndex - 1));
      let tempArrEnd = arr.slice(plusOpsIndex + 2);
      tempArr.push(tempRes);
      tempArr.push(tempArrEnd);
      tempArr = tempArr.flat();
      return findIndex(tempArr);
    }
  }
  else if (minusOpsIndex > 0 && plusOpsIndex === -1) {
    let firstOperand = arr[minusOpsIndex - 1];
    let secondOperand = arr[minusOpsIndex + 1];
    let ops = "minusOps";
    tempRes = calcOp(firstOperand, secondOperand, ops);
    // check if index is at the end of array
    if ((minusOpsIndex + 1) === (arr.length -1)) {
      tempArr = arr.slice(0, (minusOpsIndex - 1));
      tempArr.push(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the beginning of array
    if (minusOpsIndex === 1) {
      tempArr = arr.slice(minusOpsIndex + 2);
      tempArr.unshift(tempRes);
      return findIndex(tempArr);
    }
    // check if index is at the middle of array
    else if ((minusOpsIndex !== 1) && ((minusOpsIndex + 1) !== (arr.length -1))) {
      tempArr = arr.slice(0, (minusOpsIndex - 1));
      let tempArrEnd = arr.slice(minusOpsIndex + 2);
      tempArr.push(tempRes);
      tempArr.push(tempArrEnd);
      tempArr = tempArr.flat();
      return findIndex(tempArr);
    }
  }
}

// button component
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
  }

  click() {
    this.props.showDisplay(this.props.buttonId)
    this.props.showOps(this.props.onClick)
  }

  render() {
    return (
        <button
        className={this.props.buttonClass}
        onClick={() => {(this.click(this.props.onClick))}}
        id={this.props.buttonId} 
        >{this.props.buttonId}</button>     
    )
  }
};

// all buttons in a container
class ButtonCollection extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // let buttonCollection;
    let buttonCollection = buttonHolder.map((obj, index, buttonArr) => {
      return (
        <div className="button" key={buttonArr[index].id}>
          <Button
          buttonClass={buttonArr[index].class}
          onClick={buttonArr[index].onClick}
          buttonId={buttonArr[index].id}
          showDisplay={this.props.showDisplay}
          showOps={this.props.showOps}
                />
        </div>
      )
    })
    return <div className="buttonCollection">{buttonCollection}</div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [0],
      tempCalc: [],
      displayView: [],
      minusNum: false
    }
    this.display = this.display.bind(this);
    this.handleTempCalc = this.handleTempCalc.bind(this);
    this.handleDisplayView = this.handleDisplayView.bind(this);
  }
  // handle button input
  handleTempCalc(val) {
    // start: if 0 on display: input number: changes 0 to number
    if ((val !== "+" && val !== "-" && val !== "*" && val !== "/" && val !== ".") && this.state.display[0] === 0 && this.state.display.length === 1) {
        this.setState({
          display: [val]
        }, () => {
          this.handleDisplayView()
        })
      }
      // start: if 0 on display: input comma: puts comma to 0
    if (val === "." && this.state.display[0] === 0 && this.state.display.length === 1) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
    // start: if 0 on display: input operator: 0 to tempCalc and puts operator on display
    if ((val === "+" || val === "-" || val === "*" || val === "/") && this.state.display[0] === 0 && this.state.display.length === 1 && this.state.tempCalc.length === 0) {
      let tempOps = "";
        if (val === "plusOps") {
          tempOps = "+"
        }
        else if (val === "minusOps") {
          tempOps = "-"
        }
        else if (val === "multiOps") {
          tempOps = "*"
        }
        else if (val === "divOps") {
          tempOps = "/"
        }
        this.setState({
          tempCalc: [val],
          display: [tempOps]
        }, () => {
          this.handleDisplayView()
        })
      }
    // plus operations
    if (val === "plusOps") {
      // (+) on display, next (+) input ignored
      if (this.state.display[0] === "+" && this.state.display.length === 1) {
        this.setState({
          display: "+"
        })
      } 
      // change operation if other than (+)
      else if ((this.state.display[0] === "*" || this.state.display[0] === "/" || this.state.display[0] === "-") && this.state.minusNum === false) {
        this.setState({
          display: "+"
        })
      }
      // if (-) sign for number is on display then ignore (+) input
      else if (this.state.display[0] === "-" && this.state.display.length === 1 && this.state.minusNum === true) {
        this.setState({
          display: "-"
        })
      }
      // number on display 
      else if (typeof(Number(this.state.display[0])) === "number") {
        let opNumber = Number(this.state.display.join(""));
        this.setState(prevState => ({
        tempCalc: [...prevState.tempCalc, opNumber],
        display: "+",
        minusNum: false
      }), () => {
        this.handleDisplayView()
      })
      }     
    }
    // minus operations
    if (val === "minusOps") {
      // if operator on display, then next (-) input adds to number and adds operator on display to tempCalc
      if ((this.state.display[0] === "*" || this.state.display[0] === "/" || this.state.display[0] === "+" || this.state.display[0] === "-") && this.state.minusNum === false) {
        let tempOps = "";
        if (this.state.display[0] === "+") {
          tempOps = "plusOps"
        }
        else if (this.state.display[0] === "-") {
          tempOps = "minusOps"
        }
        else if (this.state.display[0] === "*") {
          tempOps = "multiOps"
        }
        else if (this.state.display[0] === "/") {
          tempOps = "divOps"
        }
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, tempOps],
          display: "-",
          minusNum: true
        }), () => {
          this.handleDisplayView()
        })
      } 

      // if (-) on display and last element in tempCalc is operator, then ignores (-) input
      else if (this.state.display[0] === "-" && this.state.display.length === 1 && this.state.minusNum === true) {
        this.setState({
          display: ["-"]
        })
      }

      // if number on display
      else if (typeof(Number(this.state.display[0])) === "number"){
        let opNumber = Number(this.state.display.join(""));
        this.setState(prevState => ({
        tempCalc: [...prevState.tempCalc, opNumber],
        display: "-",
        minusNum: false
      }), () => {
        this.handleDisplayView()
      })
      } 
    }
    // multiplication operations
    if (val === "multiOps") {
      // (*) on display, next (*) input ignored
      if (this.state.display[0] === "*" && this.state.display.length === 1) {
        this.setState({
          display: "*"
        })
      } 
      // change operation if other than (*)
      else if ((this.state.display[0] === "+" || this.state.display[0] === "/" || this.state.display[0] === "-") && this.state.minusNum === false) {
        this.setState({
          display: "*"
        })
      }
      // if (-) sign for number is on display then ignore (*) input
      else if (this.state.display[0] === "-" && this.state.display.length === 1 && this.state.minusNum === true) {
        this.setState({
          display: "-"
        })
      }
      // number on display 
      else if (typeof(Number(this.state.display[0])) === "number") {
        let opNumber = Number(this.state.display.join(""));
        this.setState(prevState => ({
        tempCalc: [...prevState.tempCalc, opNumber],
        display: "*",
        minusNum: false
      }), () => {
        this.handleDisplayView()
      })
      }     
    }
    // divison operations
    if (val === "divOps") {
      // (/) on display, next (/) input ignored
      if (this.state.display[0] === "/" && this.state.display.length === 1) {
        this.setState({
          display: "/"
        })
      } 
      // change operation if other than (/)
      else if ((this.state.display[0] === "*" || this.state.display[0] === "+" || this.state.display[0] === "-") && this.state.minusNum === false) {
        this.setState({
          display: "/"
        })
      }
      // if (-) sign for number is on display then ignore (/) input
      else if (this.state.display[0] === "-" && this.state.display.length === 1 && this.state.minusNum === true) {
        this.setState({
          display: "-"
        })
      }
      // number on display 
      else if (typeof(Number(this.state.display[0])) === "number") {
        let opNumber = Number(this.state.display.join(""));
        this.setState(prevState => ({
        tempCalc: [...prevState.tempCalc, opNumber],
        display: "/",
        minusNum: false
      }), () => {
        this.handleDisplayView()
      })
      }     
    }
    // comma input
    if (val === ".") {
      // inputs comma if value on display is a number
      if (this.state.display[this.state.display.length - 1] !== "+" && this.state.display[this.state.display.length - 1] !== "-" && this.state.display[this.state.display.length - 1] !== "*" && this.state.display[this.state.display.length - 1] !== "/" && this.state.display[this.state.display.length - 1] !== ".") {
        this.setState(prevState => ({
          display: [...prevState.display]
        }))
      }
      // ignores comma if operator on display
      else {
        this.setState({
          display: this.state.display
        })
      }
    }
    // ac input, all clear
    if (val === "ac") {
      this.setState({
        display: [0],
        tempCalc: [],
        displayView: [],
        minusNum: false
      })
    }
    // equal sign
    if (val === "equalOps") {   
      // if only 1 value in tempCalc and operator on display with no number, then show tempCalc and ignore operator
      if ((this.state.tempCalc.length === 1 && ((this.state.display.length === 1 && (this.state.display[0] === "+" || this.state.display[0] === "-" || this.state.display[0] === "/" || this.state.display[0] === "*"))))) {
          if (this.state.tempCalc.length === 1) {
            this.setState({
              display: [this.state.tempCalc],
              tempCalc: []
            })
          }
      }    
      // if 3 or more elements in tempCalc and an operator on display, then ignore operator on display and calculate tempCalc
      else if (this.state.tempCalc.length > 2 && (this.state.display === "+" || this.state.display === "-" || this.state.display === "/" || this.state.display === "*")) {
        let tempRes = this.state.tempCalc;
        let tempresult = findIndex(tempRes);
        tempresult = Number(tempresult)
        this.setState({
          display: [tempresult],
          tempCalc: []
        })
      }
      // calculate
      else {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, Number(this.state.display.join("")), "="],
          display: [0]
          // fallback in case a number is still on display to be added for calculations
        }), () => {
          let tempRes = this.state.tempCalc.slice(0, this.state.tempCalc.length - 1);
          let tempResult = findIndex(tempRes);
          tempResult = Number(tempResult);
          this.handleDisplayView();
          this.setState({
            display: [tempResult],
            tempCalc: [],
            minusNum: false

          })
        });
      }
    } 
    // numbers
    // 1
    if (val === 1) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 2
    if (val === 2) {
        // adds operator to tempCalc and number on display
        if (this.state.display[0] === "+") {
          this.setState(prevState => ({
            tempCalc: [...prevState.tempCalc, "plusOps"],
            display: [val]
          }), () => {
            this.handleDisplayView()
          })
        }
        // if (-) is added to number, not as operator, then add number to (-)
        if (this.state.display[0] === "-" && this.state.minusNum === true) {
          this.setState(prevState => ({
            display: [...prevState.display]
          }), () => {
            this.handleDisplayView()
          })
        }
        // if (-) is operator then adds to tempCalc and number to display
        if (this.state.display[0] === "-" && this.state.minusNum === false) {
          this.setState(prevState => ({
            tempCalc: [...prevState.tempCalc, "minusOps"],
            display: [val]
          }), () => {
            this.handleDisplayView()
          })
        }
        // adds (*) operator to tempCalc and number to display
        if (this.state.display[0] === "*") {
          this.setState(prevState => ({
            tempCalc: [...prevState.tempCalc, "multiOps"],
            display: [val]
          }), () => {
            this.handleDisplayView()
          })
        }
        // adds (/) operator to tempCalc and number to display
        if (this.state.display[0] === "/") {
          this.setState(prevState => ({
            tempCalc: [...prevState.tempCalc, "divOps"],
            display: [val]
          }), () => {
            this.handleDisplayView()
          })
        }
    }
    // 3
    if (val === 3) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 4
    if (val === 4) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 5
    if (val === 5) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 6
    if (val === 6) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 7
    if (val === 7) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 8
    if (val === 8) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 9
    if (val === 9) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    // 0
    if (val === 0) {
      // adds operator to tempCalc and number on display
      if (this.state.display[0] === "+") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "plusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is added to number, not as operator, then add number to (-)
      if (this.state.display[0] === "-" && this.state.minusNum === true) {
        this.setState(prevState => ({
          display: [...prevState.display]
        }), () => {
          this.handleDisplayView()
        })
      }
      // if (-) is operator then adds to tempCalc and number to display
      if (this.state.display[0] === "-" && this.state.minusNum === false) {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "minusOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (*) operator to tempCalc and number to display
      if (this.state.display[0] === "*") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "multiOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
      // adds (/) operator to tempCalc and number to display
      if (this.state.display[0] === "/") {
        this.setState(prevState => ({
          tempCalc: [...prevState.tempCalc, "divOps"],
          display: [val]
        }), () => {
          this.handleDisplayView()
        })
      }
    }
    
  }
  // handle top display 
  handleDisplayView(){
    const replaceString = ["+", "-", "*", "/"];
    const plus = /plusOps/g;
    const minus = /minusOps/g;
    const multi = /multiOps/g;
    const div = /divOps/g;
    let displayViewTemp = (this.state.tempCalc).join(" ");

    displayViewTemp = displayViewTemp.replace(plus, replaceString[0]).replace(minus, replaceString[1]).replace(multi, replaceString[2]).replace(div, replaceString[3]);
   
    this.setState({
      displayView: displayViewTemp
    })
  }
  // handle bottom display
  display(name) {
    if (name !== "=") {
      this.setState(prevState => ({
        display: [...prevState.display, name]
      }))
    } 
  };

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="topDisplay">
            <p>{this.state.displayView}</p>
          </div>
          <div className="bottomDisplay">
            <p>{this.state.display}</p>
          </div>
            <ButtonCollection
              showDisplay={this.display}
              showOps={this.handleTempCalc}
            />             
        </div>
        {/* <p className="author">by pengpenpong</p>   */}
      </div>
    )
  }

}

export default App;