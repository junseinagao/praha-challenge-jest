const command = (args: string[]): void => {
  const [_, __, op, ...props] = args;
  switch (op) {
    case "add":
      add(props);
      break;
    case "subtract":
      subtract(props);
      break;
    case "multiply":
      multiply(props);
      break;
    case "divide":
      divide(props);
      break;
  }
};

export const add = (props: string[]) => {
  //no-op
};
export const subtract = (props: string[]) => {
  //no-op
};
export const multiply = (props: string[]) => {
  //no-op
};
export const divide = (props: string[]) => {
  //no-op
};

export default command;
