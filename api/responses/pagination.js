module.exports = function (pageIndex, totalCount, data) {
  const PAGE_NUM = 20;
  let pageCount,
    res = this.res;

  if ((totalCount % PAGE_NUM) === 0) {
    pageCount = totalCount / PAGE_NUM;
  } else {
    pageCount = Math.floor(totalCount / PAGE_NUM) + 1;
  }

  res.json({
    success: true,
    code: 1,
    data: data,
    page: pageIndex,
    total: totalCount,
    pageCount: pageCount
  });
};
