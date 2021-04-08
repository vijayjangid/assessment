import { createSelector } from "reselect";

export const getFilteredCategories = (state) => state.filteredCategories;

export const getOkrs = (state) => state.okrs;

export const makeGetFilteredOkrs = () =>
  createSelector([getFilteredCategories, getOkrs], (filteredCategories, okrs) =>
    filteredCategories.length === 0
      ? okrs
      : okrs.filter((okr) => filteredCategories.includes(okr.category))
  );

// export const makeOkrHierarchy = (list) => {
//   let map = {},
//     node,
//     roots = [];

//   for (let i = 0; i < list.length; i += 1) {
//     map[list[i].id] = i;
//     list[i].children = [];
//   }
//   for (let i = 0; i < list.length; i += 1) {
//     node = list[i];
//     if (node.parent_objective_id !== "") {
//       list[map[node.parentId]].children.push(node);
//     } else {
//       roots.push(node);
//     }
//   }
//   console.log(roots);
//   return roots;
// };
