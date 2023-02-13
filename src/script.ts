const command = (args: string[]): number | void => {
  const [_, __, op, ...props] = args;
  if (props.length > 30) throw new Error("Can't get over 30 arguments.");
  if (props.some((prop) => Number.isNaN(Number(prop))))
    throw new Error("Can't get non number value.");
  switch (op) {
    case "add":
      return add(...props);
    case "subtract":
      return subtract(...props);
    case "multiply":
      return multiply(...props);
    case "divide":
      return divide(...props);
  }
};

export const add = (...props: string[]) => {
  let result = 0;
  for (const num of props) {
    result += Number(num);
  }
  return result;
};
export const subtract = (...props: string[]) => {
  const [first, ...others] = props;
  let result = Number(first);
  for (const num of others) {
    result -= Number(num);
  }
  return result;
};
export const multiply = (...props: string[]) => {
  const [first, ...others] = props;
  let result = Number(first);
  for (const num of others) {
    result = result * Number(num);
  }
  return result;
};
export const divide = (...props: string[]) => {
  const [first, ...others] = props;
  let result = Number(first);
  for (const num of others) {
    result = result / Number(num);
  }
  return result;
};

export default command;
