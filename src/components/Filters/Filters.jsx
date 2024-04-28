import { Formik } from "formik"
import { FiltersSchema } from "schemas/FiltersSchema"
import { ButtonFilters, FieldFilters, FiltersTitle, FiltersWrapper, FormFilters } from "./Filters.styled"


export const Filters = () => {
    return (<FiltersWrapper>
        <FiltersTitle>Filters:</FiltersTitle>
        <Formik
        initialValues={{
        bookTitle: '',
        author: '',
            }}
     validationSchema={FiltersSchema}
      onSubmit={ (values) => {
       console.log(values)
      }}>
        <FormFilters>
            <FieldFilters id="bookTitle" name="bookTitle" placeholder="Enter text"/>
            <FieldFilters id="author" name="author" placeholder="Enter text"/>
            <ButtonFilters type="submit">To apply</ButtonFilters>
            </FormFilters>
            </Formik>
        
    </FiltersWrapper>)
}