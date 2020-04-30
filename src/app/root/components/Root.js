export default function Root(props) {
  console.log(props);
  return <Root>{props.children}</Root>;
}
