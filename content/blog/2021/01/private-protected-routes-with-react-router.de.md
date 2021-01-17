---
title: Private und geschützte Routen mit React Router
date: 2021-01-12 21:19:11 +1
tags:
  - React
  - React Router
  - Web technologies
  - Authentication and Authorization
---

[React Router](https://reactrouter.com/) ist eines der meist verbreiteten Werkzeuge, um clientseitiges Routing in React zu realisieren. In der kommenden Version 6 werden sich einige Dinge verändern, wie [die Migrationsanleitung](https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md) offenbart.

Ein Anwendungsfall, welchem immer wieder begegnet werden kann, ist das Überprüfen einer Autorisierung und das entsprechende Weiterleiten. Ein Benutzer möchte beispielsweise auf den Pfad `./admin/dashboard` zugreifen. Falls der Benutzer passend authentifiziert und autorisiert ist, wird das Dashboard angezeigt, ansonsten das Anmeldeformular.

Um ein Gefühl für die neue React Router Version zu gewinnen, soll eine Migration mit dem genannten Anwendungsfall nachvollzogen werden.

## React Router v5

```typescript
import { Redirect, Route, RouteProps, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
} & RouteProps;

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const currentLocation = useLocation();

  let redirectPath = props.redirectPath;
  if (!props.isAuthenticated) {
    props.setRedirectPath(currentLocation.pathname);
    redirectPath = props.authenticationPath;
  }

  if (redirectPath !== currentLocation.pathname) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
}
```

## React Router v6
