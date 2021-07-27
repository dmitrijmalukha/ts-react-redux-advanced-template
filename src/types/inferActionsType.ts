export type InferActionsType<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
