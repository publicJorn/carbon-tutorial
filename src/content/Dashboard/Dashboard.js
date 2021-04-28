import React from 'react'
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react'
import PieChart from './PieChart'

export const initialRows = [
  {
    id: 'a',
    name: 'Load Balancer 3',
    protocol: 'HTTP',
    port: 3000,
    rule: 'Round robin',
    attached_groups: 'Kevins VM Groups',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load Balancer 1',
    protocol: 'HTTP',
    port: 443,
    rule: 'Round robin',
    attached_groups: 'Maureens VM Groups',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load Balancer 2',
    protocol: 'HTTP',
    port: 80,
    rule: 'DNS delegation',
    attached_groups: 'Andrews VM Groups',
    status: 'Active',
  },
]

export const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'protocol',
    header: 'Protocol',
  },
  {
    key: 'port',
    header: 'Port',
  },
  {
    key: 'rule',
    header: 'Rule',
  },
  {
    key: 'attached_groups',
    header: 'Attached Groups',
  },
  {
    key: 'status',
    header: 'Status',
  },
]

const LandingPage = () => {
  return (
    <>
      <div>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-lg-4 bx--col">
              <PieChart />
            </div>
            <div className=" bx--col">
              <PieChart />
            </div>
          </div>
        </div>
      </div>

      <div className="DataTableWrapper">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-lg-4 bx--col">
              <DataTable rows={initialRows} headers={headers} isSortable>
                {({
                  rows,
                  headers,
                  getHeaderProps,
                  getRowProps,
                  getTableProps,
                }) => (
                  <TableContainer title="DataTable with expansion">
                    <Table {...getTableProps()}>
                      <TableHead>
                        <TableRow>
                          <TableExpandHeader />
                          {headers.map((header, i) => (
                            <TableHeader
                              {...getHeaderProps({ header })}
                              key={i}
                            >
                              {header.header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <React.Fragment key={row.id}>
                            <TableExpandRow {...getRowProps({ row })}>
                              {row.cells.map((cell) => (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
                              ))}
                            </TableExpandRow>
                            {row.isExpanded && (
                              <TableExpandedRow colSpan={headers.length + 1}>
                                <p>Aux squad rules</p>
                              </TableExpandedRow>
                            )}
                          </React.Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
