import type {
  ActionFunction,
  ActionFunctionArgs,
  DataRouteMatch,
  Fetcher,
  JsonFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  Location,
  Navigation,
  Params,
  ParamParseKey,
  Path,
  PathMatch,
  PathPattern,
  RedirectFunction,
  RouteMatch,
  RouteObject,
  ShouldRevalidateFunction,
  To,
} from "@remix-run/router";
import {
  Action as NavigationType,
  createPath,
  deferred,
  generatePath,
  isDeferredError,
  isRouteErrorResponse,
  json,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  resolvePath,
} from "@remix-run/router";

import type {
  DataMemoryRouterProps,
  MemoryRouterProps,
  NavigateProps,
  OutletProps,
  RouteProps,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  RouterProps,
  RoutesProps,
} from "./lib/components";
import {
  createRoutesFromChildren,
  renderMatches,
  DataMemoryRouter,
  Deferred,
  MemoryRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
  useRenderDataRouter,
} from "./lib/components";
import type { Navigator, NavigateOptions } from "./lib/context";
import {
  DataRouterContext,
  DataRouterStateContext,
  LocationContext,
  NavigationContext,
  RouteContext,
} from "./lib/context";
import type { NavigateFunction } from "./lib/hooks";
import {
  useHref,
  useInRouterContext,
  useLocation,
  useMatch,
  useNavigationType,
  useNavigate,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRoutes,
  useActionData,
  useDeferredData,
  useLoaderData,
  useMatches,
  useRouteLoaderData,
  useRouteError,
  useNavigation,
  useRevalidator,
} from "./lib/hooks";

// FIXME: Do we need to still export these to be non-breaking?
type Hash = string;
type Pathname = string;
type Search = string;

// Expose react-router public API
export type {
  ActionFunction,
  ActionFunctionArgs,
  DataMemoryRouterProps,
  DataRouteMatch,
  Fetcher,
  Hash,
  IndexRouteProps,
  JsonFunction,
  LayoutRouteProps,
  LoaderFunction,
  LoaderFunctionArgs,
  Location,
  MemoryRouterProps,
  NavigateFunction,
  NavigateOptions,
  NavigateProps,
  Navigation,
  Navigator,
  OutletProps,
  Params,
  ParamParseKey,
  Path,
  PathMatch,
  Pathname,
  PathPattern,
  PathRouteProps,
  RedirectFunction,
  RouteMatch,
  RouteObject,
  RouteProps,
  RouterProps,
  RoutesProps,
  Search,
  ShouldRevalidateFunction,
  To,
};
export {
  DataMemoryRouter,
  Deferred,
  MemoryRouter,
  Navigate,
  NavigationType,
  Outlet,
  Route,
  Router,
  Routes,
  createPath,
  createRoutesFromChildren,
  deferred,
  isDeferredError,
  isRouteErrorResponse,
  generatePath,
  json,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  renderMatches,
  resolvePath,
  useActionData,
  useDeferredData,
  useHref,
  useInRouterContext,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
};

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We provide these exports as an escape hatch in the event that you need any
// routing data that we don't provide an explicit API for. With that said, we
// want to cover your use case if we can, so if you feel the need to use these
// we want to hear from you. Let us know what you're building and we'll do our
// best to make sure we can support you!
//
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export {
  NavigationContext as UNSAFE_NavigationContext,
  LocationContext as UNSAFE_LocationContext,
  RouteContext as UNSAFE_RouteContext,
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  useRenderDataRouter,
};
