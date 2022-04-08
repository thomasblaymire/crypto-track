import styled from 'styled-components';

export const StyledCryptoTable = styled.div`
  ${''}
  display: block;
  ${''}
  overflow: auto;

  .table {
    border-spacing: 0;
    border: 1px solid black;

    .thead {
      ${''}
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      ${''}
      overflow-y: scroll;
      overflow-x: hidden;
      height: 250px;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;

      ${''}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`;
