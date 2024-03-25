declare module '*.env.toml' {
  const value: { [k in string]: string }
  export default value
}
