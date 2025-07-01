import clsx from 'clsx';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex items-center justify-center',
        'text-center',
      )}
    >
      <div>
        <h1 className='text-7xl/tight mb-4 font-extrabold'>404</h1>
        <p>
          Erro 404 - A página que você tentou acessar não existe neste site.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
