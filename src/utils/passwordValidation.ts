import React from "react";

interface Props {
  password: string;
  passwordSetData: {
    shortPass: () => void;
    easyPass: () => void;
    mediumPass: () => void;
    hardPass: () => void;
    defaultPass: () => void;
  };
}

const passwordValidation = ({ password, passwordSetData }: Props) => {
  const easyPassReg =
    /(^[\p{Letter}][\p{Letter}]*$)|(^[0-9][0-9]*$)|(^[\W|_][\W|_]*$)/u;
  const mediumPassReg =
    /(^[\p{Letter}\W|_]*$)|(^[\p{Letter}0-9]*$)|(^[0-9\W|_]*$)/u;
  const hardPassReg =
    /(^[\p{Letter}][\p{Letter}0-9\W|_]*$)|(^[0-9][\p{Letter}0-9\W|_]*$)|(^[\W|_][\p{Letter}0-9\W|_]*$)/u;

  if (password.length > 0 && password.length < 8) {
    passwordSetData.shortPass();
    return;
  }
  if (easyPassReg.test(password)) {
    passwordSetData.easyPass();
    return;
  }

  if (mediumPassReg.test(password) && password.length > 0) {
    passwordSetData.mediumPass();
    return;
  }

  if (hardPassReg.test(password) && password.length > 0) {
    passwordSetData.hardPass();
    return;
  }
  passwordSetData.defaultPass();
  return null;
};

export default passwordValidation;
