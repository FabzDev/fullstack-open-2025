export const Total = ({parts}) => {
    const [p1, p2, p3] = parts;
    return (
        <p>Number of exercises {p1.exercises + p2.exercises + p3.exercises}</p>
    )
}