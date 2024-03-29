export function isNumberKey(e) {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    if (charCode !== 46) {
      e.preventDefault();
      return false;
    }
  }
  return true;
}

export function isOnPasteNumber(e) {
  const pastedData = e.clipboardData.getData('text/plain');
  const regex = /[0-9]/;
  if (!regex.test(pastedData)) {
    e.preventDefault();
    return false;
  }

  return true;
}

export function getFormatBlock(str, $1, $2, $3, $unit) {
  const data = `${str.slice(0, $1)}${$unit}${str.slice(
    $1,
    $2
  )}${$unit}${str.slice($2, $3)}`;
  return data;
}

export const truncateString = (str: string, num: any) => {
  if (str.length <= num || num === 0) {
    return str;
  }
  if (str.split(' ').slice(0, num).length >= num) {
    return `${str.split(' ').slice(0, num).join(' ')}...`;
  }
  return str;
};

export default { isNumberKey, isOnPasteNumber, getFormatBlock, truncateString };
