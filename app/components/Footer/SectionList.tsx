interface SectionListProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}
const SectionList = (props: SectionListProps) => {
  const { title, children, className } = props;
  return (
    <div className={`[&>*]:block ${className}`}>
      <p className="text-xl font-semibold my-4">{title}</p>
      {children}
    </div>
  );
};

export default SectionList;
