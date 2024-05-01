import { AuthorBook, BooksItem, StyledImg, TitleBook } from "./CardBook.styled"

export const CardBook = ({ book}) => {
    const { imageUrl, title, author} = book;
    return (
        <BooksItem>
            <StyledImg src={imageUrl} alt={title}  />
            <TitleBook>{title}</TitleBook>
            <AuthorBook>{author}</AuthorBook>
        </BooksItem>
    )
}