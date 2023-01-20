import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { loginSchema } from '../../validators/AuthValidator';

const ConnectionPanel = () => {
  const { handleLogin } = useContext(AuthContext);
  
  const handleSubmit = async (values, { setSubmitting }) => {
    await handleLogin(values);
  }
  
  return (
    <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit} validationSchema={loginSchema}>
      {({ isSubmitting }) => 
        <Form className='flex flex-col gap-5 p-5 border border-t-0 border-zinc-200 dark:border-zinc-600 rounded-b-lg text-zinc-900 dark:text-white'>
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
          <div className='mx-auto mt-5'>
            <button type='submit' className='px-5 py-1 bg-green-600 hover:bg-green-700 rounded-md text-white' disabled={isSubmitting}>
              Se connecter
            </button>
          </div>
        </Form>
      }
    </Formik>
  );
};

export default ConnectionPanel;