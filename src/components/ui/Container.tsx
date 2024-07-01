interface TContainer  {
children: React.ReactNode
}
const Container = ({children} : TContainer) => {
    return (
        <div className="w-full max-w-7xl h-screen mx-auto ">
            {children}
        </div>
    );
};

export default Container;