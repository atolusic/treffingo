import React, { useEffect, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Context } from '../../Context'

import { getBoardById } from '../../actions/board'
import NotFoundPage from '../../components/NotFoundPage'

function BoardContent({ match, history }) {
  const { state: { selectedBoard, boardNotFound }, dispatch } = useContext(Context)
  const { boardId } = match.params

  useEffect(() => {
    dispatch(getBoardById(boardId))
  }, [boardId, dispatch])

  return (
    <div>
      {selectedBoard && selectedBoard.name}
      {boardNotFound && <NotFoundPage notFoundText="Board not found." history={history} />}
    </div>
  )
}

BoardContent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
}

export default BoardContent
