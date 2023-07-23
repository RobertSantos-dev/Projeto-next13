interface Props { style: string }

export default function Logo({ style }: Props) {
  return (
    <h1 className={ style }>LOGO</h1>
  );
}
