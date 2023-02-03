import { Field, Formik, Form, ErrorMessage } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import { signupSchema } from '../../validators/AuthValidator';

const SignupPanel = () => {
  const { handleSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = (values, {setErrors, setSubmitting}) => {
    setSubmitting(true);
    
    handleSignup(values)
      .then(() => {
        toast.success('Inscription réussi');
        navigate('/');
      })
      .catch(error => {
        setErrors({submit: error});
        toast.error('Erreur lors de l\'inscription');
      })
      .finally(() => setSubmitting(false));
  }
  
  return (
    <Formik initialValues={{lastname: '', firstname: '', email: '', password: ''}} onSubmit={handleSubmit} validationSchema={signupSchema}>
      {({ isSubmitting, errors: {submit}}) =>
        <Form className='flex max-w-full md:max-w-md flex-col gap-5 p-5 border border-t-0 border-zinc-200 dark:border-zinc-600 rounded-b-lg text-zinc-900 dark:text-white'>
          <div className='flex gap-5 justify-between'>
            <span>Nom :</span>
            <div className='flex flex-col'>
              <Field name='lastname' type='text' className='ml-auto rounded-md outline-zinc-500 bg-zinc-100 dark:bg-zinc-600 px-2 py-0.5' placeholder='Nom'/>
              <ErrorMessage name='lastname'>{(msg) => <span className='text-red-500 whitespace-pre-line'>{msg}</span>}</ErrorMessage>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <span>Prénom :</span>
            <div className='flex flex-col'>
              <Field name='firstname' type='text' className='ml-auto rounded-md outline-zinc-500 bg-zinc-100 dark:bg-zinc-600 px-2 py-0.5' placeholder='Prenom'/>
              <ErrorMessage name='firstname'>{(msg) => <span className='text-red-500 whitespace-pre-line'>{msg}</span>}</ErrorMessage>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <span>Email :</span>
            <div className='flex flex-col'>
              <Field name='email' type='text' className='ml-auto rounded-md outline-zinc-500 bg-zinc-100 dark:bg-zinc-600 px-2 py-0.5' placeholder='Exemple@exemple.com'/>
              <ErrorMessage name='email'>{(msg) => <span className='text-red-500 whitespace-pre-line'>{msg}</span>}</ErrorMessage>
            </div>
          </div>
          <div className='flex gap-5 justify-between'>
            <span>Mot de passe :</span>
            <div className='flex flex-col'>
              <Field name='password' type='password' className='ml-auto rounded-md outline-zinc-500 bg-zinc-100 dark:bg-zinc-600 px-2 py-0.5' placeholder='Mot de passe'/>
              <ErrorMessage name='password'>{(msg) => <span className='text-red-500 whitespace-pre-line'>{msg}</span>}</ErrorMessage>
            </div>
          </div>
          {submit && 
            <div className='mx-auto text-red-500'>
              <span className='break-keep'>{submit}</span>
            </div>
          }
          <div className='mx-auto'>
            <button type='submit' className='px-5 py-1 bg-green-600 hover:bg-green-700 rounded-md text-white' disabled={isSubmitting}>
              S'inscrire
            </button>
          </div>
        </Form>
      }
    </Formik>
  );
};

export default SignupPanel;