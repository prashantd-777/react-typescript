import React from 'react';

type RandomNumberType = {
    value: number
}

type PositiveNumberProps = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberProps = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroProps = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}


type RandomNumberProps = PositiveNumberProps | NegativeNumberProps | ZeroProps;

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  )
}
