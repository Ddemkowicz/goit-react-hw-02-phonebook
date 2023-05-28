import AddContactFrom from './AddContactFrom/AddContactFrom';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(148, 148, 148)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <AddContactFrom />
    </div>
  );
};
