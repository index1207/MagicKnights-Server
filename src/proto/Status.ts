/* eslint-disable */

export const protobufPackage = "packet";

export enum EInputDirection {
  None = 0,
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
  UNRECOGNIZED = -1,
}

export function eInputDirectionFromJSON(object: any): EInputDirection {
  switch (object) {
    case 0:
    case "None":
      return EInputDirection.None;
    case 1:
    case "Up":
      return EInputDirection.Up;
    case 2:
    case "Down":
      return EInputDirection.Down;
    case 3:
    case "Left":
      return EInputDirection.Left;
    case 4:
    case "Right":
      return EInputDirection.Right;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EInputDirection.UNRECOGNIZED;
  }
}

export function eInputDirectionToJSON(object: EInputDirection): string {
  switch (object) {
    case EInputDirection.None:
      return "None";
    case EInputDirection.Up:
      return "Up";
    case EInputDirection.Down:
      return "Down";
    case EInputDirection.Left:
      return "Left";
    case EInputDirection.Right:
      return "Right";
    case EInputDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
