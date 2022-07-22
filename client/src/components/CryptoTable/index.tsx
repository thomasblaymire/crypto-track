import React, { useState } from 'react';
import { Table } from '../Table';
import { Loading } from '../UI/Loading';
import { Pagination } from '../UI/Pagination';
import { useCryptos, useWatchList, useModal } from '@hooks/index';
import { StyledCryptoTable } from './styled';
import { columns } from './data';
import { Signup } from '../Auth/Signup';
import { Modal } from '../UI/Modal';

export const CryptoTable = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);
  const [modalOpen, setModalOpen, toggle] = useModal();
  const {
    data: cryptos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useCryptos(pageNumber);
  const { watchList } = useWatchList();

  const handlePaginate = (pageNumber: number): void => {
    setPageNumber(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSelect = () => {
    toggle();
  };

  // var ownerData =
  //   cryptos &&
  //   cryptos.filter(function (crypto) {
  //     return crypto.id === watchList.cryptoId;
  //   })[0];

  // console.log('TOM ownerData', ownerData);

  // const getFormattedRows = cryptos => {
  //   const values = [...cryptos, ...watchList];

  //   console.log('TOM values', values);

  //   const result =
  //     values &&
  //     values.reduce((common, item) => {
  //       if (
  //         cryptos.every(inner =>
  //           inner.some(_item => _item.cryptoId === item.name)
  //         )
  //       ) {
  //         common.push(item);
  //       }

  //       return common;
  //     }, []);

  //   console.log('TOM result', result);

  //   // const formatted = cryptos
  //   //   ? cryptos.filter(crypto => {
  //   //       const replacedId = watchList?.cryptoId?.replace(/\s/g, '-');
  //   //       console.log('TOM replacedId', replacedId);
  //   //       replacedId?.includes(crypto.name);
  //   //     })
  //   //   : null;

  //   // if (formatted) {
  //   //   console.log('TOM formatted', formatted);
  //   //   return formatted;
  //   // }

  //   // console.log('TOM formatted', formatted);

  //   return cryptos;
  // };

  return (
    <>
      {isError ? (
        <div>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        cryptos.length ? (
          <StyledCryptoTable>
            <Table
              rows={cryptos}
              columns={columns}
              handleSelect={handleSelect}
            />
            <Pagination handlePaginate={handlePaginate} />
          </StyledCryptoTable>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}

      {isLoading ? <Loading position="center" /> : null}

      {/* <Modal
        isActive={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="Create An Account"
      >
        <Signup toggleModal={toggle} />
      </Modal> */}
    </>
  );
};
