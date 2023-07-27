interface Props { params: { id: string } }

export default function Characters({ params }: Props) {
  return (
    <p>{ params.id }</p>
  );
}