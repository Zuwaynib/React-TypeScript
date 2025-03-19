interface Props {
    text: string;
}

const Alert = ({ text }: Props) => {
  return <div className = "alert alert-danger">{ text}</div>;
};

export default Alert;
