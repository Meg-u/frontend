# React + Vite


## Key Improvements

1. **Filtering System**:
   - Added filter buttons (All/Active/Completed)
   - Implemented filter logic in the main component
   - Visual indication of active filter

2. **Enhanced Validation**:
   - Empty task validation with error message
   - Visual feedback (red border) for invalid input
   - Automatic error clearing when user starts typing

3. **Documentation**:
   - Comprehensive README with:
     - Feature overview
     - Installation instructions
     - Usage guide
     - Technology stack
     - Screenshot placeholder

4. **UI Improvements**:
   - Better filter button styling
   - More prominent validation errors
   - Consistent spacing and layout

This implementation now meets all core requirements plus the bonus features while maintaining a clean, professional codebase with proper documentation. The component structure remains organized and each piece has a clear responsibility.
It also provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
