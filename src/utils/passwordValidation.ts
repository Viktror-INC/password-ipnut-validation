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
  const easyPassReg = /(^[A-Za-z][A-Za-z]*$)|(^[0-9][0-9]*$)|(^[\W|_][\W|_]*$)/;
  const mediumPassReg = /(^[A-Za-z\W|_]*$)|(^[A-Za-z0-9]*$)|(^[0-9\W|_]*$)/;
  const hardPassReg =
    /(^[A-Za-z][A-Za-z0-9\W|_]*$)|(^[0-9][A-Za-z0-9\W|_]*$)|(^[\W|_][A-Za-z0-9\W|_]*$)/;

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
