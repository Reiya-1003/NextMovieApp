export const getServerSideProps = async (context) => {
    const session = await getSession(context);
  
    return {
      props: {
        session,
      },
    };
  };